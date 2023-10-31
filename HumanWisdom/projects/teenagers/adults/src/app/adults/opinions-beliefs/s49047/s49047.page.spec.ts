import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49047Page } from './s49047.page';

describe('S49047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49047Page;
  let fixture: ComponentFixture<S49047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
