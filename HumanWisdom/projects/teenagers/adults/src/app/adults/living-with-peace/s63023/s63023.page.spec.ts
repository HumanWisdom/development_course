import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63023Page } from './s63023.page';

describe('S63023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63023Page;
  let fixture: ComponentFixture<S63023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
