//import '../App.css';
import './loginpage.css';
import Image1 from './bg2.png';
function Login() {
    return (
        <>
        
          <div className="container-fluid pt-16">
          <div className="row justify-content-center" >
            <div className="col-5 view1">
              <div className="login_form shadow-lg p-3 mb-5 rounded" >
                <div className="form_header dispaly-flex justify-content:flex-start">
                  <h1 className="h1">
                    Login
                  </h1>
                </div>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><i class="bi bi-envelope-fill"></i></span>
                      <input type="email" class="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="addon-wrapping" required autofocus/>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><i class="bi bi-lock-fill"></i></span>
                      <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" requied/>
                    </div>
                  </div>
                  <div className="spacingg">
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <a href="forget.js" className="forget"  className='text-blue-700'>Forgot Password?</a>
                  </div>
                    <button type="submit" className="btn bg-dark text-light">Login</button>
                    <div className="create_link">
                      <span>Not registered yet?</span>
                      <a href="/signup"  className='text-blue-700'>Create account</a>
                    </div>
                    
                </form>
              </div>
            </div>
            <div className="col-5 view2">
              <div >
                <figure class="figure">
                  <img src={Image1}className="figure-img img-fluid rounded" alt="..."/>
                </figure>
              </div>
            </div>

          </div>
          </div>
          
         </>
    );
}
export default Login;