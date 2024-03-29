import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { TreeView,TreeItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
const Sidebar = () => {
  return (
    <>
       <div className="sidebar">

        <Link to="/">
        <img src={logo} alt="" />
        </Link>

        <Link to="/admin/Dashboard">
        <p>
            <DashboardIcon/> Dashboard
        </p>
        </Link>

        <Link>
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
            <TreeItem nodeId="1" label="Products">
                <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon/>}/>
                </Link>
                <Link to="/admin/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                </Link>
            </TreeItem>
        </TreeView>
        </Link>

        <Link to="/admin/users">
        <p>
            <PeopleIcon/> People
        </p>
        </Link>
        <Link to="/admin/orders">
        <p>
            <ListAltIcon/> Orders
        </p>
        </Link>

        <Link to="/admin/reviews">
        <p>
            <RateReviewIcon/> 
            Reviews
        </p>
        </Link>
        </div>

            </>
  )
}

export default Sidebar
