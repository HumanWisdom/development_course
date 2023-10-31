import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25002p1Page } from './s25002p1.page';

describe('S25002p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25002p1Page;
  let fixture: ComponentFixture<S25002p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25002p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25002p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
