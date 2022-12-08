import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64002Page } from './s64002.page';

describe('S64002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64002Page;
  let fixture: ComponentFixture<S64002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
