import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Table, Form, Button, Space, Modal, Input } from "antd";


import {
  getOneQuote,
  getQuoteByName,
  getQuoteByTitle,
} from "../../actions/anime";



const mapDispatchToProps = (dispatch) => {
  return {
    getOneQuote: () => dispatch(getOneQuote()),
    getQuoteByTitle: (title) => dispatch(getQuoteByTitle(title)),
    getQuoteByName: (name) => dispatch(getQuoteByName(name)),
  };
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

class QuotesSite extends Component {
 
  state = {
    anime: [],
    animeTitle: [],
    title: "",
    name: "",
    titleModalVisible: false,
    nameModalVisible: false,
    array: false,
  };

  getOneQuote = async () => {
    await this.props.getOneQuote();
    if (this.props.status) {
      this.setState({
        anime: this.props.anime,
        array: true,
      });
    }
  };

  openTitleModal = () => {
    this.setState({
      titleModalVisible: true,
    });
  };

  openNameModal = () => {
    this.setState({
      nameModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      titleModalVisible: false,
      nameModalVisible: false,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.title)
    console.log(this.state.name)
  };

  handleSubmit = async () => {
    this.state.titleModalVisible
      ? await this.props.getQuoteByTitle(this.state.title)
      : await this.props.getQuoteByName(this.state.name);
    this.setState({
      array: false,
      anime: this.props.anime,
    });
    this.closeModal();
  };

  render() {
    const columns = [
      {
        title: "Anime",
        dataIndex: "anime",
        key: "anime",
      },
      {
        title: "Karakter",
        dataIndex: "character",
        key: "character",
      },
      {
        title: "Id??zet",
        dataIndex: "quote",
        key: "quote",
      },
    ];
    return (
      <>
        <Row style={{justifyContent:"center",alignContent:"center",background:"lightgray",height:"40px"}} >
        
          <Col >
            <Space  >
              
              <Button style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark"  onClick={() => this.getOneQuote()}>
                Get One
              </Button>
              <Button style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark"  onClick={() => this.openTitleModal()}>
                Get 10 by title
              </Button>
              <Button style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark"  onClick={() => this.openNameModal()}>
                Get 10 by character
              </Button>
            </Space>
          </Col>
        </Row>
        <Modal
          visible={this.state.nameModalVisible}
          onCancel={this.closeModal}
          title="Keress n??v alapj??n"
          maskClosable={false}
          centered
          footer={[
            <Button key="title" style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}}  type="dark" onClick={this.handleSubmit}>
              Keres??s
            </Button>,
            <Button key="cancel" style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark" onClick={this.closeModal}>
              M??gse
            </Button>,
          ]}
          bodyStyle={{ overflowY: "auto", maxHeight: "800px" }}
        >
          <Form
            onFinish={this.handleSubmit}
            ref={this.formRef}
            {...formItemLayout}
            name="design"
            scrollToFirstError
          >
            <Form.Item
              name="N??v"
              label="N??v"
              rules={[
                {
                  required: true,
                  message: "N??v megad??sa k??telez??",
                },
              ]}
            >
              <Input name="name" onChange={this.handleChange} />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          visible={this.state.titleModalVisible}
          onCancel={this.closeModal}
          title="Keress c??m alapj??n"
          maskClosable={false}
          centered
          footer={[
            <Button key="title" style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark" onClick={this.handleSubmit}>
              Keres??s
            </Button>,
            <Button key="cancel" style={{backgroundColor:"purple",borderRadius:15,fontWeight:"bold",outlineColor:"black"}} type="dark" onClick={this.closeModal}>
              M??gse
            </Button>,
          ]}
          bodyStyle={{ overflowY: "auto", maxHeight: "800px" }}
        >
          <Form
            onFinish={this.handleSubmit}
            ref={this.formRef}
            {...formItemLayout}
            name="design"
            scrollToFirstError
          >
            <Form.Item
              name="title"
              label="C??m"
              rules={[
                {
                  required: true,
                  message: "C??m megad??sa k??telez??",
                },
              ]}
            >
              <Input name="title" onChange={this.handleChange} />
            </Form.Item>
          </Form>
        </Modal>
        <Table style={{color:"black",background: "black",borderBlockColor:"purple", }}
       
          columns={columns}
          dataSource={this.state.array ? [this.state.anime] : this.state.anime}
          locale={{ emptyText: "Nincs adat" }}
          pagination={{
            position: ["bottomCenter"],
            pageSize: 15,
            showSizeChanger: false,
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  anime: state.animeReducer.anime,
  status: state.animeReducer.status,
});

const Quotes = connect(mapStateToProps, mapDispatchToProps)(QuotesSite);
export default Quotes;
