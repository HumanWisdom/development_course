import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46062Page } from './s46062.page';

describe('S46062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46062Page;
  let fixture: ComponentFixture<S46062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
