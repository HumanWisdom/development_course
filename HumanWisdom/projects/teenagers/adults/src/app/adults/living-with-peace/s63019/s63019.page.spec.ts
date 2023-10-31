import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63019Page } from './s63019.page';

describe('S63019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63019Page;
  let fixture: ComponentFixture<S63019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
