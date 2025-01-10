import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStatusService } from '../../services/survey-status.service';
import { SurveyService } from '../../services/survey.service';
import { QuestionTypeService } from '../../services/question-type.service';
import { QuestionService } from '../../services/question.service';
import { QuestionOptionService } from '../../services/question-option.service';
import { SystemUserService } from '../../services/system-user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  public cards = [
    { title: 'Survey Statuses', url: 'survey-statuses', icon: 'checkmark-done-outline', description: 'Total survey statuses', count: 0 },
    { title: 'Surveys', url: 'surveys', icon: 'document-text-outline', description: 'Total active surveys', count: 0 },
    { title: 'Question Types', url: 'question-types', icon: 'options-outline', description: 'Total question types', count: 0 },
    { title: 'Questions', url: 'questions', icon: 'help-outline', description: 'Total survey questions', count: 0 },
    { title: 'Question Options', url: 'question-options', icon: 'list-outline', description: 'Total question options', count: 0 },
    { title: 'System Users', url: 'system-users', icon: 'people-outline', description: 'Total system users', count: 0 },
  ];
  public filteredCards = [...this.cards];
  public showSearchBar = false;
  public searchQuery = '';

  constructor(
    private surveyStatusService: SurveyStatusService,
    private surveyService: SurveyService,
    private questionTypeService: QuestionTypeService,
    private questionService: QuestionService,
    private questionOptionService: QuestionOptionService,
    private systemUserService: SystemUserService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.loadSurveyStatusCount();
    await this.loadSurveyCount();
    await this.loadQuestionTypeCount();
    await this.loadQuestionCount();
    await this.loadQuestionOptionCount();
    await this.loadSystemUserCount();
  }

  ionViewWillEnter() {
    this.loadSurveyStatusCount();
    this.loadSurveyCount();
    this.loadQuestionTypeCount();
    this.loadQuestionCount();
    this.loadQuestionOptionCount();
    this.loadSystemUserCount();
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
    if (!this.showSearchBar) {
      this.clearSearch();
    }
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  filterCards() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.filteredCards = this.cards.filter((card) =>
        card.title.toLowerCase().includes(query)
      );
    } else {
      this.filteredCards = [...this.cards];
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredCards = [...this.cards];
    this.showSearchBar = false;
  }

  checkOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    const searchBarElement = document.querySelector('ion-searchbar');

    if (this.showSearchBar && searchBarElement && !searchBarElement.contains(targetElement)) {
      this.clearSearch();
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  async loadSurveyStatusCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.surveyStatusService.getSurveyStatuses(token).subscribe({
        next: (surveyStatuses) => {
          const surveyStatusCount = surveyStatuses?.length || 0;
          this.cards[0].count = surveyStatusCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching SurveyStatus count:', error);
          this.cards[0].count = 0;
        },
        complete: () => {
          console.log('SurveyStatus count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

  async loadSurveyCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.surveyService.getSurveys(token).subscribe({
        next: (surveys) => {
          const surveyCount = surveys?.length || 0;
          this.cards[1].count = surveyCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching Survey count:', error);
          this.cards[1].count = 0;
        },
        complete: () => {
          console.log('Survey count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

  async loadQuestionTypeCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.questionTypeService.getQuestionTypes(token).subscribe({
        next: (questionTypes) => {
          const questionTypeCount = questionTypes?.length || 0;
          this.cards[2].count = questionTypeCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching QuestionType count:', error);
          this.cards[2].count = 0;
        },
        complete: () => {
          console.log('QuestionType count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

  async loadQuestionCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.questionService.getQuestions(token).subscribe({
        next: (questions) => {
          const questionCount = questions?.length || 0;
          this.cards[3].count = questionCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching Question count:', error);
          this.cards[3].count = 0;
        },
        complete: () => {
          console.log('Question count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

  async loadQuestionOptionCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.questionOptionService.getQuestionOptions(token).subscribe({
        next: (questionOptions) => {
          const questionOptionCount = questionOptions?.length || 0;
          this.cards[4].count = questionOptionCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching QuestionOption count:', error);
          this.cards[4].count = 0;
        },
        complete: () => {
          console.log('QuestionOption count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

  async loadSystemUserCount() {
    const token = await this.authService.getToken();
    if (token) {
      this.systemUserService.getSystemUsers(token).subscribe({
        next: (systemUsers) => {
          const systemUserCount = systemUsers?.length || 0;
          this.cards[5].count = systemUserCount;
          this.filterCards();
        },
        error: (error) => {
          console.error('Error fetching SystemUser count:', error);
          this.cards[5].count = 0;
        },
        complete: () => {
          console.log('SystemUser count fetch completed');
        },
      });
    } else {
      console.warn('Token not found');
    }
  }

}
