import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46017Page } from './s46017.page';

describe('S46017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46017Page;
  let fixture: ComponentFixture<S46017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
