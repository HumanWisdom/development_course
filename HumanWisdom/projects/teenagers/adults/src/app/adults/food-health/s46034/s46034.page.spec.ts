import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46034Page } from './s46034.page';

describe('S46034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46034Page;
  let fixture: ComponentFixture<S46034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
