import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46069Page } from './s46069.page';

describe('S46069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46069Page;
  let fixture: ComponentFixture<S46069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
