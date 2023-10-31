import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46076Page } from './s46076.page';

describe('S46076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46076Page;
  let fixture: ComponentFixture<S46076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
