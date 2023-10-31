import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64072Page } from './s64072.page';

describe('S64072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64072Page;
  let fixture: ComponentFixture<S64072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
