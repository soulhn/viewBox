<template>
  <div>
    <body className="snippet-body">
      <div class="container mt-5 mb-5">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="d-flex justify-content-between p-2 px-3">
                <div class="d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                  <div class="d-flex flex-column ml-2"><span class="font-weight-bold">Jeanette Sun</span> <small class="text-primary">Collegues</small></div>
                </div>
                <div class="d-flex flex-row mt-1 ellipsis"><small class="mr-2">수정</small> <i class="fa fa-pencil-square"></i></div>
              </div>
              <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid" />
              <div class="p-2">
                <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-row icons d-flex align-items-center"><i class="fa fa-heart"></i> <i class="ml-2 fa fa-smile-o"></i></div>
                  <div class="d-flex flex-row muted-color"><span>2 comments</span> <span class="ml-2">Share</span></div>
                </div>
                <hr />
                <div class="comments">
                  <div class="d-flex flex-row mb-2">
                    <img src="https://i.imgur.com/9AZ2QX1.jpg" width="40" class="rounded-image" />
                    <div class="d-flex flex-column ml-2">
                      <span class="name">Daniel Frozer</span> <small class="comment-text">I like this alot! thanks alot</small>
                      <div class="d-flex flex-row align-items-center status"><small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small></div>
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-2">
                    <img src="https://i.imgur.com/1YrCKa1.jpg" width="40" class="rounded-image" />
                    <div class="d-flex flex-column ml-2">
                      <span class="name">Elizabeth goodmen</span> <small class="comment-text">Thanks for sharing!</small>
                      <div class="d-flex flex-row align-items-center status"><small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small></div>
                    </div>
                  </div>
                  <div class="comment-input">
                    <input type="text" class="form-control" />
                    <div class="fonts"><i class="fa fa-camera"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"); */
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"); */
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"); */

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
.card {
  border: none;
}
.ellipsis {
  color: #a09c9c;
}
hr {
  color: #a09c9c;
  margin-top: 4px;
  margin-bottom: 8px;
}
.muted-color {
  color: #a09c9c;
  font-size: 13px;
}
.ellipsis i {
  margin-top: 3px;
  cursor: pointer;
}
.icons i {
  font-size: 25px;
}
.icons .fa-heart {
  color: red;
}
.icons .fa-smile-o {
  color: yellow;
  font-size: 29px;
}
.rounded-image {
  border-radius: 50% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
}
.name {
  font-weight: 600;
}
.comment-text {
  font-size: 12px;
}
.status small {
  margin-right: 10px;
  color: blue;
}
.form-control {
  border-radius: 26px;
}
.comment-input {
  position: relative;
}
.fonts {
  position: absolute;
  right: 13px;
  top: 8px;
  color: #a09c9c;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #8bbafe;
  outline: 0;
  box-shadow: none;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}
</style>
