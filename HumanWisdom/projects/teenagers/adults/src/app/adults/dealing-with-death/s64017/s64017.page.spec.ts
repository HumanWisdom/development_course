import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64017Page } from './s64017.page';

describe('S64017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64017Page;
  let fixture: ComponentFixture<S64017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
