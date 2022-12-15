import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64054Page } from './s64054.page';

describe('S64054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64054Page;
  let fixture: ComponentFixture<S64054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
