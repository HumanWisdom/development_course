import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63022Page } from './s63022.page';

describe('S63022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63022Page;
  let fixture: ComponentFixture<S63022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
