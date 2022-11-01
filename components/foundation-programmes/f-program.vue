<template>
  <div id="collaborate" class="section bg-neutral-200 wf-section">
    <div class="container-default w-container">
      <div>
        <div class="content-top title-paragraph">
          <div>
            <h2 class="mg-bottom-0px">TACT FOUNDATION<br />PROGRAMMES</h2>
          </div>
          <div
            id="w-node-fb2d33ef-7426-2a3a-0484-bf48bc44d901-bc44d8fa"
            class="inner-container-400px"
          >
            <p class="mg-bottom-0px tactfeed">
              Register for our #DOINGGOOD programmes powered by TACT FOUNDATION
            </p>
          </div>
        </div>
        <div
          data-w-id="fb2d33ef-7426-2a3a-0484-bf48bc44d904"
          class="grid-3-columns"
        >
          <a
            v-for="(item, index) in this.$store.state.programs"
            :key="index"
            data-w-id="fb2d33ef-7426-2a3a-0484-bf48bc44d905"
            :href="item.Url"
            class="card community-card w-inline-block"
            ><img
              :src="item.Image.url"
              sizes="(max-width: 479px) 59vw, 161px"
              width="161"
              alt=""
            />
            <div class="mg-top-24px">
              <h3 class="title">{{ item.Title }}</h3>
              <p>{{ item.Summary }}</p>
            </div>
            <div
              data-w-id="fb2d33ef-7426-2a3a-0484-bf48bc44d90c"
              class="flex mg-top-24px color-primary-1"
            >
              <div>Read more</div>
              <div class="link-arrow"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
