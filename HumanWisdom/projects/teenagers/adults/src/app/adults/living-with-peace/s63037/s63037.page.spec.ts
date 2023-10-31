import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63037Page } from './s63037.page';

describe('S63037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63037Page;
  let fixture: ComponentFixture<S63037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
