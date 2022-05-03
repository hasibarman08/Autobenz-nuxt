<template>
  <!-- Featured car start -->
  <div class="featured-car content-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <!-- Option bar start -->
          <div class="car_found d-flex justify-content-between">
            <div class="left">
              <div class="drive_item">
                <div class="right">
                  <select class="selectpicker search-fields" name="select-make">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Price High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
                <div class="left">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        >Cars</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        >Utility</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                        >Bikes</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-5.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>VW, GOLF 6</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-1.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>VW, GOLF 6</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-4.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>VW, GOLF 6</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-3.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>VW, GOLF 6</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-6.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>VW, GOLF 6</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-2.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>Audi A4</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-2.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>Audi A4</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-2.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>Audi A4</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="car-box-3">
                <div class="car-thumbnail">
                  <a href="/item-details" class="car-img">
                    <div class="tag-2">
                      <div class="del-price">
                        <del>CHF 100'000</del><span></span>
                      </div>
                    </div>
                    <img
                      class="d-block w-100"
                      src="img/car/car-2.png"
                      alt="car"
                    />
                  </a>
                  <div class="carbox-overlap-wrapper">
                    <div class="overlap-box">
                      <div class="overlap-btns-area">
                        <a class="overlap-btn compare-btn">
                          <i class="fa fa-share"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a class="overlap-btn wishlist-btn">
                          <i class="fa fa-print"></i>
                        </a>
                        <a
                          class="overlap-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#"
                        >
                          <i class="fa fa-eye"><span>16</span></i>
                        </a>
                        <div class="car-magnify-gallery">
                          <a
                            href="img/car/car-5.png"
                            class="overlap-btn"
                            data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <i class="fa fa-expand"></i>
                            <img
                              class="hidden"
                              src="img/car/car-5.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-2.png"
                            class="hidden"
                            data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-2.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-3.png"
                            class="hidden"
                            data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-3.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-4.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-4.png"
                              alt="hidden-img"
                            />
                          </a>
                          <a
                            href="img/car/car-1.png"
                            class="hidden"
                            data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                          >
                            <img
                              class="hidden"
                              src="img/car/car-1.png"
                              alt="hidden-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-des-text_body">
                  <div class="row">
                    <div class="col">
                      <a href="/item-details">
                        <h4>Audi A4</h4>
                      </a>
                    </div>
                    <div class="col">
                      <div class="price pull-right">CHF 99'500</div>
                    </div>
                  </div>
                  <!-- <div class="location">
                                    <a href="/item-details">
                                        <i class="flaticon-pin"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div> -->
                  <ul class="facilities-list clearfix">
                    <li><i class="flaticon-way"></i> 84,000</li>
                    <li><i class="flaticon-manual-transmission"></i> Manual</li>
                    <li><i class="flaticon-fuel"></i> Petrol</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Page navigation start -->
          <!-- <div class="pagination-box p-box-2 text-center pagination-lar">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fa fa-angle-left"></i
                  ></a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#"
                    ><i class="fa fa-angle-right"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </div> -->

          <div>
            <p>Current page: {{ currentPage }}</p>
            <v-pagination
              v-model="currentPage"
              :page-count="totalPages"
              :classes="bootstrapPaginationClasses"
              :labels="paginationAnchorTexts"
            ></v-pagination>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="sidebar-right">
            <!-- Advanced search start -->
            <div
              class="widget widget-3 advanced-search2"
              style="padding-bottom: 88px"
            >
              <h3 class="sidebar-title">Search Cars</h3>
              <form method="GET">
                <div class="form-group">
                  <select class="selectpicker search-fields" name="select-make">
                    <option>Select Make</option>
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Lamborghini</option>
                    <option>Sports Car</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="selectpicker search-fields"
                    name="select-brand"
                  >
                    <option>Select Model</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Nissan</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="selectpicker search-fields"
                    name="select-location"
                  >
                    <option>Select Fuel type</option>
                    <option>Diesel</option>
                    <option>Petrol</option>
                    <option>Electric</option>
                    <option>Gas</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="selectpicker search-fields" name="select-type">
                    <option>Select Transmission</option>
                    <option>Automatic</option>
                    <option>Manual</option>
                    <option>Triptronic</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="selectpicker search-fields" name="select-year">
                    <option>Select Year</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
                <div class="range-slider clearfix">
                  <label>Price</label>
                  <div
                    data-min="0"
                    data-max="379000"
                    data-min-name="min_price"
                    data-max-name="max_price"
                    data-unit="CHF"
                    class="range-slider-ui ui-slider"
                    aria-disabled="false"
                  ></div>
                  <div class="clearfix"></div>
                </div>
                <div class="form-group mb-0">
                  <button class="search-button btn">Search</button>
                </div>
              </form>
            </div>
            <div class="posts-by-category widget">
              <h3 class="sidebar-title">About Us</h3>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      WHO ARE WE ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <code>Autobenz</code> is a team of young IT specialists
                      and web telemarketing specialists trained to boost the
                      sales and promotion of individuals and business partners
                      throughout Switzerland, thanks to our dynamic, practical
                      and easy to manage website.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      HOW IT WORKS ?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ol>
                        <li>Choose and create your account for life.</li>
                        <li>
                          Your lifetime account is valid for the 3 categories
                          offered by Autobenz (Auto-Immo-Deal).
                        </li>
                        <li>
                          Begin to insert your ads and receive your customers.
                        </li>
                        <li>
                          For any suggestions or complaints a single address:
                          <code>info@autobenz.ch</code>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      OUR MARKETING SUPPORTS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ol>
                        <li>E-mailing campaigns.</li>
                        <li>Telemarketing campaigns.</li>
                        <li>Advertising in newspapers.</li>
                        <li>Multicasting your ads and social networks.</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      GOOD TO KNOW
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ol>
                        <li>
                          For each ad you receive an invoice systematically
                          generated by the site in your mailbox and a copy in
                          your account.
                        </li>
                        <li>
                          Autobenz does not guarantee a quick sale of your
                          vehicle on the site.
                        </li>
                        <li>Advertising in newspapers.</li>
                        <li>
                          Your phone number will only be visible after receipt
                          of your payment. Payment of your credit card
                          subscription is recommended.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget tags-box widget-3">
              <div class="global-footer-mobile-apps">
                <h3 class="sidebar-title">Our Mobile App</h3>
                <!-- <p>Download the App Today</p> -->
                <div class="global-footer-mobile-buttons">
                  <a
                    href="https://apps.apple.com/us/app/cars-com-new-used-cars/id353263352"
                    data-linkname="footer-app-store"
                    data-activity-rule-type="custom"
                  >
                    <img
                      data-src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/app-store-badge-us-black-1.png"
                      alt="App Store download"
                      class="app-store-button"
                      src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/app-store-badge-us-black-1.png"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cars.android&amp;hl=en_US"
                    data-linkname="footer-google-play"
                    data-activity-rule-type="custom"
                  >
                    <img
                      data-src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/google-play-badge-us-1.png"
                      alt="Google Play download"
                      class="google-play-button"
                      src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/google-play-badge-us-1.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Featured car end -->
</template>

<script>
import vPagination from "vue-plain-pagination";
export default {
  name: "Welcome",
  components: { vPagination },

  data() {
    return {
      currentPage: 1,
      totalPages: 30,
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link",
      },
      paginationAnchorTexts: {
        first: "First",
        prev: "Previous",
        next: "Next",
        last: "Last",
      },
    };
  },
  computed: {
    lists() {
      const items = this.data;
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.data.length;
    },
  },
};
</script>

<style scoped>
.myList {
  padding: 20px;
}
</style>
