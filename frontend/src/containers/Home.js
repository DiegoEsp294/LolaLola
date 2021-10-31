import React, { Component } from "react";
import Encabezado from "../components/Encabezado/encabezado";
import Oferta from "../components/Oferta/oferta";
import Destacado from "../components/Destacado/destacado";
import Footer from "../components/Footer/footer";
import AgregarModal from "../components/Modal/modal";
import Ropa from "../components/Ropa/ropa";
import Maquillaje from "../components/Maquillaje/maquillaje";


import "./Home.css";
import "./Encabezado.css";
import "./Oferta.css";
import "./Footer.css";

//axios (Para manejar los POST y GET del backend)
import axios from 'axios';


export  default class home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataOferta: [],
        dataDestacado: [],
        dataRopa: [],
        dataMaquillaje: [],
        formatoImg: ".jpg",
        articulo: 0,
        mostrarModal: false,
        item_seleccionado: [],
        items_seleccionados: [], // esto es para cuando haya mas de una foto de un solo articulo
        tamaño_items : 0,
        index : 0, // indice de la imagen que se esta mostrando en model
        id : 0,
        Inicio : true,
        Ropa : false,
        Maquillaje : false,
        prenda: 'Remera',
        prendasSeleccionadas: []
      };

      this.handlebutton = this.handlebutton.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleNext = this.handleNext.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handlePrenda = this.handlePrenda.bind(this);
    }

    handlebutton(dir) {
      if(dir == 'Inicio'){
        this.setState({Inicio : true})
        this.setState({Ropa : false})
        this.setState({Maquillaje : false})
      }
      if(dir == 'Ropa'){
        this.setState({Inicio : false})
        this.setState({Ropa : true})
        this.setState({Maquillaje : false})
      }
      if(dir == 'Maquillaje'){
        this.setState({Inicio : false})
        this.setState({Ropa : false})
        this.setState({Maquillaje : true})
      }
    }

    handleNext(old_index){
      const tam = this.state.tamaño_items
      if(old_index  < tam-1){
        this.setState({index : this.state.index + 1 })
        this.setState({id: this.state.items_seleccionados[old_index+1].Auto_increment_id})
      }
      console.log("Tamaño : " + tam)
    }

    handlePrevious(old_index){
      if(old_index  > 0){
        this.setState({index : this.state.index - 1 })
        this.setState({id: this.state.items_seleccionados[old_index -1 ].Auto_increment_id})
      }
    }

    handleClose(){
        this.setState({mostrarModal: false})
        this.setState({index: 0})
    }

    handlePrenda(prenda){
      this.setState({prenda: prenda})
      console.log("prenda es : " + prenda)
      var dataPrenda = this.state.dataRopa.filter(e => e.Nombre == prenda)
      this.setState({prendasSeleccionadas : dataPrenda})
    }

    handleShow(e,data){
      this.setState({mostrarModal: true})
      this.setState({item_seleccionado: e})
      var items = data.filter(art => art.Numero_articulo == e.Numero_articulo)
      this.setState({items_seleccionados: items})
      this.setState({tamaño_items: items.length})
      this.setState({id: items[this.state.index].Auto_increment_id})
      console.log("handleShow : " + this.state.index)
 
    }

    componentDidMount() { //componentDidMount() solo se usa para montar por primera vez el componente
      axios
        .get("http://localhost:8000/ofertas/")
        .then( //aqui entra por alguna respuesta
          response => {
            this.setState({dataOferta: response.data})
            console.log(this.state.dataOferta)
          }
        ).catch(//entra si retorna error
          error => {
            if (!error.response)
              alert(error);
            else if (error.response.data && error.response.status !== 404)
              alert(error.response.data);
            else
              alert(error.response.statusText);
        });
        axios
        .get("http://localhost:8000/destacados/")
        .then(
          response => {
            this.setState({dataDestacado: response.data})
            console.log(this.state.dataDestacado)

          }
        ).catch(
          error => {
            if (!error.response)
              alert(error);
            else if (error.response.data && error.response.status !== 404)
              alert(error.response.data);
            else
              alert(error.response.statusText);
        });
        axios
        .get("http://localhost:8000/ropa/")
        .then(
          response => {
            this.setState({dataRopa: response.data})
          }
        ).catch(
          error => {
            if (!error.response)
              alert(error);
            else if (error.response.data && error.response.status !== 404)
              alert(error.response.data);
            else
              alert(error.response.statusText);
        });
        axios
        .get("http://localhost:8000/maquillaje/")
        .then(
          response => {
            this.setState({dataMaquillaje: response.data})
          }
        ).catch(
          error => {
            if (!error.response)
              alert(error);
            else if (error.response.data && error.response.status !== 404)
              alert(error.response.data);
            else
              alert(error.response.statusText);
        });

    }

  render(){

    console.log("index : " + this.state.index)
    console.log("id : " + this.state.id)
    console.log("prenda : " + this.state.prenda)
    console.log("data : ")
    console.log(this.state.prendasSeleccionadas)

    return(
      <div>
      <Encabezado
        handlebutton={this.handlebutton}
        formatoImg={this.state.formatoImg}
      />
      <span>
        {this.state.Ropa ? (
          <div>
            <Ropa
              data={this.state.prendasSeleccionadas}
              formatoImg={this.state.formatoImg}
              handleShow ={this.handleShow}
              handlePrenda={this.handlePrenda}
              prenda={this.state.prenda}
            />
          </div>
        ) : (
          this.state.Maquillaje ? (
            <div>
              <Maquillaje
                data={this.state.dataMaquillaje}
                formatoImg={this.state.formatoImg}
                handleShow ={this.handleShow}
              />
            </div>
          ) : (
            <div></div>
          )
        )}
      </span>
      <div class="border-top my-3"> </div>
      <Oferta
        data={this.state.dataOferta}
        formatoImg={this.state.formatoImg}
        handleShow ={this.handleShow}
      />
      <Destacado
        data={this.state.dataDestacado}
        formatoImg={this.state.formatoImg}
        handleShow ={this.handleShow}
      />
      <AgregarModal
        show={this.state.mostrarModal}
        onHide={this.handleClose}
        handleNext ={this.handleNext}
        handlePrevious ={this.handlePrevious}
        index = {this.state.index}
        tamaño={this.state.tamaño_items}
        id = {this.state.id}
      />
      <Footer
      />
    </div>
    )
  }

}
