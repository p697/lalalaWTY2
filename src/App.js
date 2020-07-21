import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { 
  Button,
  Divider,
  Input,
} from 'antd';
import './index.css'

class PostFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit() {
    alert(JSON.stringify(this.state))
  }

  render (){
    return (
      <div className="App">
        <div>概述</div>
        <Input name='title' onChange={e => this.onChange(e)} />
        <Divider />
        <div>内容</div>
        <Input name='body' onChange={e => this.onChange(e)} />
        <Divider />
        <button className='btn' onClick={() => this.onSubmit()}>提交</button>
      </div>
    );
  }
}

export default PostFrom;
