<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="shadow mt-5">
          <div class="card border-0 rounded-0 text-white bg-secondary px-4 py-2 text-start">
            <h3 class="m-0">Login</h3>
          </div>
          <div class="card border-0 p-2 text-start rounded-0">
            <div class="card-body">
              <div class="row">
                <form action="">
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email Address</label>
                      <input type="email" name="email" id="email" class="form-control" placeholder="Name@example.com">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" name="password" id="password" class="form-control">
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg px-5 mt-4 text-center">Login</button>
                  </div>
                  <div class="col-12 mt-2">
                    <small class="fw-bold">Don't have an account? <a href="#" class="text-primary">Register</a></small>
                  </div>
                  <div class="row my-4">
                    <div class="line"></div>
                    <small class="or text-center">Or</small>
                    <div class="line"></div>
                  </div>
                  <div class="col-12 text-center">
                    <div class="btn btn-danger btn-lg mx-2">
                      Login with Google <i class="fab fa-google"></i>
                    </div>
                    <div class="btn btn-info btn-lg mx-2 text-white">
                      Login with Twitter <i class="fab fa-twitter"></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
.line {
  height: 1px;
  width: 45%;
  background-color: #E0E0E0;
  margin-top: 10px
}

.or {
  width: 10%;
  font-weight: bold
}
</style>