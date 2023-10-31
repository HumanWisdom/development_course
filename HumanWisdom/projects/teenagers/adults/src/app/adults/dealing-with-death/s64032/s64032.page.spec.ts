import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64032Page } from './s64032.page';

describe('S64032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64032Page;
  let fixture: ComponentFixture<S64032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
