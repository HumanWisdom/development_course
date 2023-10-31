import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64036Page } from './s64036.page';

describe('S64036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64036Page;
  let fixture: ComponentFixture<S64036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
