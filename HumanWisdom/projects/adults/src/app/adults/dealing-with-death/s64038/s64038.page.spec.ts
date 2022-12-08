import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64038Page } from './s64038.page';

describe('S64038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64038Page;
  let fixture: ComponentFixture<S64038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
