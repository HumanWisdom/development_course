import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134193Page } from './s134193.page';

describe('S134193Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134193Page;
  let fixture: ComponentFixture<S134193Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134193Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134193Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
