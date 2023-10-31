import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46016Page } from './s46016.page';

describe('S46016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46016Page;
  let fixture: ComponentFixture<S46016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
