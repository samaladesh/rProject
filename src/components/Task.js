import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import '../Css/table.css'
function Task() {

  //list of Data
  const [list, setList] = useState([]);

  //Edit data
  const [newEditData, setnewEditData] = useState({ item: "", status: "pending" });
  const [editNewData, seteditNewData] = useState(false);

  //find index of row
  const [rowIndex, setrowIndex] = useState()

  //find lenght of specific task
  const [cmpleteTask, setcmpleteTask] = useState()
  const [pendingTask, setpendingTask] = useState()

  //dropdown
  const [dropDown, setdropDown] = useState("All");

  //search
  const [searchItem, setSearchItem] = useState("")
  //edit catching id
  const [ eachDataEditID,setEachDataEditID] = useState()

// ---------------------posting data--------------------------------
  const getData = () => {
    axios.get('http://localhost:4200/data').then((res) => {
      setList(res.data)
      var Completed = res.data?.filter((item) => {
        return item.status === "Completed"
      })
      setcmpleteTask(Completed.length);

      var pending = res.data?.filter((item) => {
        return item.status === "Pending"
      })
      setpendingTask(pending.length)
    })
  }
  // ----------------------edit Submit function---------------------------
  const handleEditSubmitData = ()=>{
console.log("save clikced");
    axios.put('http://localhost:4200/data' + eachDataEditID , {
      task: setnewEditData.task,
      status: setnewEditData.status
    }).then((res)=>{
      
    }).catch((err)=>{

    })
  }
  // -------------------------delete function-----------------------------
  function handleDelete(id) {

    axios.delete("http://localhost:4200/data/" + id)
      .then((res) => {
        console.log('res', res)
      }).catch((err) => {
        console.log(err);
      })
  }

  function newwInputData(e) {
    // console.log(e.target.value);
    switch (e.target.name) {
      case "item":
        setnewEditData((prev) => ({ ...prev, item: e.target.value }))
        break;
      default:
        break;
    }
    console.log(newEditData)
  }
  function editData(index, eachData) {
    seteditNewData(true);
    setrowIndex(index);
    setEachDataEditID(eachData.id)
  }

  useEffect(() => {
    return () => {
      getData()
    }
  })

  return (
    <>
      <div className='all-data'>All Task: {list?.length}</div>
      <div className='all-data-cmplt'>Completed Task: {cmpleteTask}</div>
      <div className='all-data-pending'>Pending Task: {pendingTask}</div>
      <div className='input-search'><input type="search" placeholder='search' onChange={(e) => { setSearchItem(e.target.value.toLowerCase()) }} /></div>
      <div>
        <select className='select-option' onClick={(e) => { setdropDown(e.target.value) }}>
          <option>All</option>
          <option>Pending</option>
          <option>Success</option>
        </select>
      </div>
      <div className='add-task'><Link to='/task/addtask'><button><h4>Add-Task</h4></button></Link></div>
      <div className="container">
        <div className="table">
          <div className="table-header">
            <div className="header__item"><a id="name" className="filter__link" href="#">S No.</a></div>
            <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Task</a></div>
            <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Status</a></div>
            <div className="header__item">Edit</div>
            <div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">Delete</a></div>
          </div>
          {list && list.filter((item) => {
            return item?.task?.toLowerCase().includes(searchItem)
          }).filter((item) => {
            if (dropDown === "All") {
              return item;
            } else if (dropDown === "Pending") {
              return item.status === "Pending";
            } else if (dropDown === "Success") {
              return item.status === "Completed"
            }
          }).map((eachData, index) => {
            return <>
              <div className="table-content">
                <div className="table-row">
                  <div className="table-data">{index + 1}</div>
                  {editNewData && rowIndex === index ? 
                  <>
                  <div className="table-data">
                    <input defaultValue={eachData.task} name="item" onChange={(e) => { newwInputData(e) }} />
                  </div>
                  </> 
                  : 
                  <div className="table-data">{eachData.task}</div>}


                  {editNewData && rowIndex === index ? <><select defaultValue={eachData.status}>
                    <option>Pending</option>
                    <option>Completed</option>
                  </select></> : <div className="table-data">{eachData.status}</div>}


                  {editNewData && rowIndex === index ? <>
                    <div className="table-data"><button className='save-btn' onClick={() => {handleEditSubmitData() }}>Save</button></div>
                    <div className="table-data"><button className='btn-danger' onClick={() => { seteditNewData(false) }}>Cancel</button></div>
                  </> :
                    <>
                      <div className="table-data"><button className='btn' onClick={() => { editData(index,eachData) }}>Edit</button></div>

                      <div className="table-data"><button className='btn-danger' onClick={() => { handleDelete(eachData.id) }}>Delete</button></div>
                    </>
                  }

                </div>
              </div>
            </>
          })
          }
        </div>
      </div>
    </>
  )
}

export default Task;