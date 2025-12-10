<template>
  <!-- Trenner für History -->
  <div class="flex items-center justify-center my-12 select-none pointer-events-none trenner-container">
    <div class="flex-grow h-0.5 trenner-line-left"></div>
    <div class="mx-4 flex items-center justify-center rounded-full trenner-circle shadow-lg">
      <div class="inner-circle"></div>
    </div>
    <div class="flex-grow h-0.5 trenner-line-right"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.trenner-container {
  position: relative;
  max-width: 1200px;
  margin: 2rem auto;
}

.trenner-line-left,
.trenner-line-right {
  height: 3px;
  background: linear-gradient(90deg, #D90429, #FFD700);
  position: relative;
  overflow: hidden;
}

.trenner-line-right {
  background: linear-gradient(90deg, #FFD700, #D90429);
}

.trenner-line-left::after,
.trenner-line-right::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  animation: shine 3s infinite;
}

.trenner-line-right::after {
  animation-delay: 1.5s;
}

.trenner-circle {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #FFD700, #D90429);
  border: none;
  position: relative;
  animation: pulse 3s infinite;
}

.inner-circle {
  width: 70%;
  height: 70%;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.inner-circle::after {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.3), transparent);
  animation: rotate 6s linear infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(217, 4, 41, 0.5);
  }

  50% {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
