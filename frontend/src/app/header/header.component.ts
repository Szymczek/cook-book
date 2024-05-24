import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) { }
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
