import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49071Page } from './s49071.page';

describe('S49071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49071Page;
  let fixture: ComponentFixture<S49071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
