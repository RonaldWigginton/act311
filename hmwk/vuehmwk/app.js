const app = Vue.createApp({
    data : function() {
        return {
            coursesData: [],
            pickedTitle: "",
            pickedproffesor,

        }
    },
    methods :{

    },
    created() {
        fetch("./sections.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.coursesData = data;
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    },
    computed: {
        pickedselection: function() {
            var selection;
            selection = this.coursesData.filter( course =>
                course.title.toLowerCase().includes(this.pickedtitle.toLowerCase()));
            selection = selection.filter( course =>
                course.instructor.toLowerCase().includes(this.pickedproffesor.toLowerCase()));
            return selection;
        }
    },
    mounted() {
   
        },
})
app.mount("#appArea");