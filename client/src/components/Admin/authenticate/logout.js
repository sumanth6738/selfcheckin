import React from 'react';
import axios from '../../../config/axios'
import loader from "../../../Assets/loader.gif"

class AdminLogout extends React.Component {
    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            notice: '',
            redirect: false
        };
    }

    componentDidMount = () => {
        console.log("component did mount")
        axios.delete('/admin/logout')
            .then((res) => {
                this.setState(() => ({notice: res.data.notice}))
                localStorage.clear('token')
                this.props.handleIsAuthenticated(false)
                window.location.href = '/admin';
            })
            .catch((err) => {
                window.location.reload()
                console.log(err)
            })
    }
    render() {
        console.log("render")
        return (
            <div>
                <img src={loader} alt="loading.."  width="300px" height="300px" style={{ marginTop : "60px", marginLeft : "40%"}}/>
            </div>
        );
    }
}

export default AdminLogout;
