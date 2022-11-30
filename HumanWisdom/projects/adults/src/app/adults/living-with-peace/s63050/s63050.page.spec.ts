import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63050Page } from './s63050.page';

describe('S63050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63050Page;
  let fixture: ComponentFixture<S63050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
