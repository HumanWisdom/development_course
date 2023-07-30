import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134059Page } from './s134059.page';

describe('S134059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134059Page;
  let fixture: ComponentFixture<S134059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
