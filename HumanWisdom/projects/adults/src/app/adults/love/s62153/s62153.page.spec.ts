import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62153Page } from './s62153.page';

describe('S62153Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62153Page;
  let fixture: ComponentFixture<S62153Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62153Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62153Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
