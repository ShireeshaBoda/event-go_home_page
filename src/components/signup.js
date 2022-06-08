//import '../App.css';
import './signup.css';
import Image1 from './bg2.png';
function Signup() {
    return (
        <>
          <div className="container-fluid pt-16">
          <div className="row justify-content-center" >
            <div className="col-5 view1">
              <div className="login_form shadow-lg p-3 mb-5 rounded" >
                <div className="form_header dispaly-flex justify-content:flex-start ">
                  <h1 className="h1">
                    Sign Up
                  </h1>
                  <p>To explore more..!</p>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name*</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-person-fill"></i></span>
                            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" required autofocus/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone *</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-telephone-fill txt-primary"></i></span>
                            <input  type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="addon-wrapping" required/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address*</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-envelope-fill"></i></span>
                            <input type="email" class="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="addon-wrapping" required />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password*</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-lock-fill"></i></span>
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" requied/>
                        </div>
                     </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password*</label>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-file-lock2-fill"></i></span>
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" requied/>
                        </div>
                    </div>
                    <div className="spacingg">
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">I agree to the <a href="terms.js">Terms &#38; Conditons</a></label>
                        <button type="submit" className="btn bg-dark text-light">Sign Up</button>
                        <div className="create_link">
                            <span>Already have an Account?</span>
                            <a href="/login" className='text-blue-700'>Sign in</a>
                        </div>
                    </div>
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
export default Signup;