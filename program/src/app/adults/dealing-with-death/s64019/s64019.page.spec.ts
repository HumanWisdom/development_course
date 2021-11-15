import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64019Page } from './s64019.page';

describe('S64019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64019Page;
  let fixture: ComponentFixture<S64019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
