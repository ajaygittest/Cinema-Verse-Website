import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserPanelService } from '../../services/user-panel-service/user-panel-service';
import { StorageService } from '../../services/user-panel-service/storage-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cine-user-panel',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.scss',
})
export class UserPanel implements OnInit {
  panelOpen = false;
  panelTitle = '';
  formData = {
    name: '',
    genre: '',
    rating: '',
    synopsis: '',
    imageFile: null,
    imagePreview: null as string | ArrayBuffer | null
  };
  constructor(private panelService: UserPanelService, private store: StorageService) { }
  ngOnInit(): void {
  }

  selectedFileName: string | null = null;
  selectedFile: File | null = null;

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.formData.imageFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.formData.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  saveItem() {
    this.store.addItem({ ...this.formData });
    this.closePanel();
  }
  closePanel() {
    this.panelService.closePanel();
  }
}
