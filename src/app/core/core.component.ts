import { Component, OnInit } from '@angular/core';
import { Topic } from '../helpers/topic.enum';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit {
  Topic = Topic;
  topics: Topic[] = [Topic.DesignPatterns, Topic.Angular, Topic.Java];
  selectedTopic = this.topics[0];
  showResults: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submitPageEmitted() {
    if (this.topics.length > 1) {
      this.topics = this.topics.filter((topic) => topic !== this.selectedTopic);
      this.selectedTopic = this.topics[0];
    } else {
      this.submitAllEmitted();
    }
  }

  submitAllEmitted() {
    this.showResults = true;
  }
}
