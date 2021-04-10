import axios from "axios"

export default {
    getBooks : function (){
      return axios("/api/books")
    },

    saveBook : function (data){
       return axios.post("/api/books", data)
    },

    deleteBook : function (data){
        return axios.post("/api/books/:id", data)
     }

}