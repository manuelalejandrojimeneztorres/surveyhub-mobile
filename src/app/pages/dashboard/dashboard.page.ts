import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public cards = [
    { title: 'Survey Statuses', url: 'survey-statuses', icon: 'checkmark-done-outline', description: 'Manage survey statuses' },
    { title: 'Surveys', url: 'surveys', icon: 'document-text-outline', description: 'Manage surveys' },
    { title: 'Question Types', url: 'question-types', icon: 'options-outline', description: 'Manage question types' },
    { title: 'Questions', url: 'questions', icon: 'help-outline', description: 'Manage questions' },
    { title: 'Question Options', url: 'question-options', icon: 'list-outline', description: 'Manage question options' },
    { title: 'System Users', url: 'system-users', icon: 'people-outline', description: 'Manage system users' },
  ];
  public filteredCards = [...this.cards];
  public showSearchBar = false;
  public searchQuery = '';

  constructor(private router: Router,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit() { }

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
      this.filteredCards = this.cards.filter(card =>
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

}
