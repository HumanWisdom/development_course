import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64047Page } from './s64047.page';

describe('S64047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64047Page;
  let fixture: ComponentFixture<S64047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
