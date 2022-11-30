import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46046Page } from './s46046.page';

describe('S46046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46046Page;
  let fixture: ComponentFixture<S46046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
