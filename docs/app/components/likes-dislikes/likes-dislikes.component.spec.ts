import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesDislikesComponent } from './likes-dislikes.component';

describe('LikesDislikesComponent', () => {
  let component: LikesDislikesComponent;
  let fixture: ComponentFixture<LikesDislikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikesDislikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikesDislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
