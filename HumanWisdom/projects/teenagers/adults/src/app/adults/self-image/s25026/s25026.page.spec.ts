import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25026Page } from './s25026.page';

describe('S25026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25026Page;
  let fixture: ComponentFixture<S25026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
