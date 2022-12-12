import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63017Page } from './s63017.page';

describe('S63017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63017Page;
  let fixture: ComponentFixture<S63017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
