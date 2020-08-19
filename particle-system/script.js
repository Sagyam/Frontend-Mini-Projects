const particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesCount = Math.floor(window.innerWidth / 9);
  for (let i = 0; i <= particlesCount; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(128, 128, 0);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    //position
    this.pos = createVector(random(width), random(height));
    //Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    //size
    this.size = 10;
  }
  //Update movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  //Draw single paricle
  draw() {
    noStroke();
    fill("rgba(255, 255, 0, 1)");
    circle(this.pos.x, this.pos.y, this.size);
  }
  //Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > window) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < 120) {
        stroke("rgba(255, 255, 0, 0.1)");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
