import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116080Page } from './s116080.page';

describe('S116080Page', () => {
      
    let component:  S116080Page;
  let fixture: ComponentFixture<S116080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
